import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_K_JOURNALAttributes {
    LUSERID?: number;
    DTINSERT?: Date;
    STR_ATTRIBUT?: string;
    FKSTRID?: string;
    LUSERIDINSERT?: number;
    DTEDIT?: Date;
    STRID: string;
}

@Table({
	tableName: "KB_T_B_K_JOURNAL",
	timestamps: false 
})
export class KB_T_B_K_JOURNAL extends Model<KB_T_B_K_JOURNALAttributes, KB_T_B_K_JOURNALAttributes> implements KB_T_B_K_JOURNALAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ATTRIBUT?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}