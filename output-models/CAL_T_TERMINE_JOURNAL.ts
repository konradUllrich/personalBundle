import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_T_TERMINE_JOURNALAttributes {
    STR_TITEL?: string;
    FKSTRID?: string;
    LUSERID?: number;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STRID: string;
}

@Table({
	tableName: "CAL_T_TERMINE_JOURNAL",
	timestamps: false 
})
export class CAL_T_TERMINE_JOURNAL extends Model<CAL_T_TERMINE_JOURNALAttributes, CAL_T_TERMINE_JOURNALAttributes> implements CAL_T_TERMINE_JOURNALAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITEL?: string;

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
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

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
    	primaryKey: true,
    	type: DataType.STRING(255) 
    })
    	STRID!: string;

}