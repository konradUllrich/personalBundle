import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface PER_T_ORGA0Attributes {
    LUSERID?: number;
    STRID: string;
    DTINSERT?: Date;
    DTEDIT?: Date;
    STR_ORGANISATIONSBAUM?: string;
    LUSERIDINSERT?: number;
    STR_CONTAINER?: string;
}

@Table({
	tableName: "PER_T_ORGA0",
	timestamps: false 
})
export class PER_T_ORGA0 extends Model<PER_T_ORGA0Attributes, PER_T_ORGA0Attributes> implements PER_T_ORGA0Attributes {

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

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_ORGANISATIONSBAUM?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_CONTAINER?: string;

}