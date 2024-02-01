import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface KB_T_B_FAVORITENAttributes {
    DTINSERT?: Date;
    FKSTRID?: string;
    STRID: string;
    DTEDIT?: Date;
    LUSERIDINSERT?: number;
    LUSERID?: number;
}

@Table({
	tableName: "KB_T_B_FAVORITEN",
	timestamps: false 
})
export class KB_T_B_FAVORITEN extends Model<KB_T_B_FAVORITENAttributes, KB_T_B_FAVORITENAttributes> implements KB_T_B_FAVORITENAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	FKSTRID?: string;

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
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERID?: number;

}