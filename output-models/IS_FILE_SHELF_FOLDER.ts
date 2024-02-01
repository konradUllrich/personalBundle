import {
	Model, Table, Column, DataType, Index, Sequelize, ForeignKey 
} from "sequelize-typescript";

export interface IS_FILE_SHELF_FOLDERAttributes {
    LUSERIDINSERT?: number;
    B_USERSCANADD?: boolean;
    REF_PROFILE?: string;
    B_USERSCANDELETE?: boolean;
    STR_GROUP?: string;
    LUSERID?: number;
    DTINSERT?: Date;
    L_PARENT_KEY?: number;
    B_USERSCANEDIT?: boolean;
    LID: number;
    DTEDIT?: Date;
    STR_FOLDER_NAME?: string;
    L_KEY?: number;
    B_USERS_CAN_CREATE_CONNECTIONS?: boolean;
    STR_OWNER_PROFILE?: string;
    L_SORT_ORDER?: number;
}

@Table({
	tableName: "IS_FILE_SHELF_FOLDER",
	timestamps: false 
})
export class IS_FILE_SHELF_FOLDER extends Model<IS_FILE_SHELF_FOLDERAttributes, IS_FILE_SHELF_FOLDERAttributes> implements IS_FILE_SHELF_FOLDERAttributes {

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	LUSERIDINSERT?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_USERSCANADD?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	REF_PROFILE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_USERSCANDELETE?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_GROUP?: string;

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
    	type: DataType.INTEGER 
    })
    	L_PARENT_KEY?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_USERSCANEDIT?: boolean;

    @Column({
    	primaryKey: true,
    	type: DataType.INTEGER 
    })
    	LID!: number;

    @Column({
    	allowNull: true,
    	type: DataType.DATE(7) 
    })
    	DTEDIT?: Date;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_FOLDER_NAME?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_KEY?: number;

    @Column({
    	allowNull: true,
    	type: DataType.STRING 
    })
    	B_USERS_CAN_CREATE_CONNECTIONS?: boolean;

    @Column({
    	allowNull: true,
    	type: DataType.STRING(255) 
    })
    	STR_OWNER_PROFILE?: string;

    @Column({
    	allowNull: true,
    	type: DataType.INTEGER 
    })
    	L_SORT_ORDER?: number;

}