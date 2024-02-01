import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_T_PERS_JOURNALAttributes {
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STR_AKTIVITAET?: string;
    DTEDIT?: Date;
    FKSTRID?: string;
    LUSERID?: number;
    STRID: string;
}

@Table({
	tableName: "PER_T_PERS_JOURNAL",
	timestamps: false 
})
export class PER_T_PERS_JOURNAL extends Model<PER_T_PERS_JOURNALAttributes, PER_T_PERS_JOURNALAttributes> implements PER_T_PERS_JOURNALAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_AKTIVITAET?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}