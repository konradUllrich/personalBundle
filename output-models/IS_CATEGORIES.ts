import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_CATEGORIESAttributes {
    STRID: string;
    LUSERID?: number;
    STR_SPRACHE?: string;
    DTINSERT?: Date;
    B_DEACTIVATED?: boolean;
    LUSERIDINSERT?: number;
    STR_TITLE?: string;
    DTEDIT?: Date;
}

@Table({
	tableName: "IS_CATEGORIES",
	timestamps: false 
})
export class IS_CATEGORIES extends Model<IS_CATEGORIESAttributes, IS_CATEGORIESAttributes> implements IS_CATEGORIESAttributes {

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
    	type: DataType.STRING(255) 
    })
    	STR_SPRACHE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTINSERT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_DEACTIVATED?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_TITLE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

}