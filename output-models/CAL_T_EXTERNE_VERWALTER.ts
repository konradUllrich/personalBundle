import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface CAL_T_EXTERNE_VERWALTERAttributes {
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
    STRID: string;
    DTEDIT?: Date;
    STR_EMAIL?: string;
    LUSERID?: number;
    STR_NAME?: string;
}

@Table({
	tableName: "CAL_T_EXTERNE_VERWALTER",
	timestamps: false 
})
export class CAL_T_EXTERNE_VERWALTER extends Model<CAL_T_EXTERNE_VERWALTERAttributes, CAL_T_EXTERNE_VERWALTERAttributes> implements CAL_T_EXTERNE_VERWALTERAttributes {

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

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_EMAIL?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NAME?: string;

}