import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface QU_TAGSAttributes {
    STR_NAME?: string;
    DTEDIT?: Date;
    STRID: string;
    LUSERID?: number;
    LUSERIDINSERT?: number;
    DTINSERT?: Date;
}

@Table({
	tableName: "QU_TAGS",
	timestamps: false 
})
export class QU_TAGS extends Model<QU_TAGSAttributes, QU_TAGSAttributes> implements QU_TAGSAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_NAME?: string;

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

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

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

}